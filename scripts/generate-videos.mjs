import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VIDEOS_DIR = path.join(__dirname, "..", "public", "videos");

// Read API key from .env.local
const envPath = path.join(__dirname, "..", ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const API_KEY = envContent.match(/KIE_API_KEY=(.+)/)?.[1]?.trim();

if (!API_KEY) {
  console.error("KIE_API_KEY not found in .env.local");
  process.exit(1);
}

const BASE_URL = "https://api.kie.ai/api/v1/jobs";

const VIDEOS = [
  {
    name: "hero-home",
    prompt:
      "Cinematic aerial slow-motion footage of diverse people walking through lush green parks and modern cityscapes at golden hour, soft natural light, bokeh background, lifestyle wellness aesthetic, calm and aspirational mood, 4K cinematic quality",
  },
  {
    name: "hero-walk",
    prompt:
      "Cinematic morning sunrise at Gardens by the Bay Singapore, people walking together along a scenic waterfront path, Supertree Grove in the background with golden morning light, lush tropical greenery, mist, serene and energizing atmosphere, slow camera dolly forward",
  },
  {
    name: "hero-dinner",
    prompt:
      "Elegant outdoor dinner party at sunset, long communal table with white tablecloths, candles flickering, flowers, guests in all-white attire, warm golden lighting, fairy lights, wine glasses, cinematic shallow depth of field, Le Diner en Blanc style, luxurious and intimate atmosphere",
  },
];

async function submitTask(prompt) {
  const res = await fetch(`${BASE_URL}/createTask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "bytedance/seedance-1.5-pro",
      input: JSON.stringify({
        prompt,
        duration: "8",
        aspect_ratio: "16:9",
        resolution: "720p",
        generate_audio: false,
        web_search: false,
      }),
    }),
  });

  const data = await res.json();
  console.log("Submit response:", JSON.stringify(data, null, 2));

  if (data.data?.taskId) {
    return data.data.taskId;
  }
  throw new Error(`Failed to submit: ${JSON.stringify(data)}`);
}

async function pollTask(taskId) {
  const url = `${BASE_URL}/recordInfo?taskId=${taskId}`;
  while (true) {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const data = await res.json();
    const state = data.data?.state;

    console.log(`  State: ${state}`);

    if (state === "success") {
      const result = JSON.parse(data.data?.resultJson || "{}");
      const videoUrl = result.resultUrls?.[0];
      if (!videoUrl) {
        console.log("  Full response:", JSON.stringify(data.data, null, 2));
        throw new Error("No video URL in completed response");
      }
      return videoUrl;
    }

    if (state === "failed" || state === "fail") {
      throw new Error(`Task failed: ${data.data?.failMsg || JSON.stringify(data.data)}`);
    }

    await new Promise((r) => setTimeout(r, 10000));
  }
}

async function downloadVideo(url, filename) {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  const filePath = path.join(VIDEOS_DIR, `${filename}.mp4`);
  fs.writeFileSync(filePath, buffer);
  console.log(`  Saved: ${filePath}`);
}

async function main() {
  console.log("=== Seedance Video Generation ===\n");
  console.log(`KIE API Key: ${API_KEY.substring(0, 8)}...`);
  console.log(`Output: ${VIDEOS_DIR}\n`);

  fs.mkdirSync(VIDEOS_DIR, { recursive: true });

  for (const video of VIDEOS) {
    console.log(`\n[${video.name}] Submitting...`);
    console.log(`  Prompt: ${video.prompt.substring(0, 80)}...`);

    try {
      const taskId = await submitTask(video.prompt);
      console.log(`  Task ID: ${taskId}`);
      console.log(`  Polling...`);

      const videoUrl = await pollTask(taskId);
      console.log(`  Video URL: ${videoUrl}`);

      await downloadVideo(videoUrl, video.name);
      console.log(`  ✓ Done!`);
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`);
    }
  }

  console.log("\n=== All done ===");
}

main();
