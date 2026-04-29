import 'dotenv/config';
import { Job } from './types/Job';

function normalizeJob(raw: any): Job {
  return {
    id: raw.id,
    title: raw.title,
    company: raw.company?.display_name ?? 'unkown',
    location: raw.location?.display_name ?? 'unkown',
    description: raw.description
  }
}


export async function fetchJobs(): Promise<any[]> {
  const { APP_URL, APP_ID, API_KEY } = process.env;  

  if (!APP_URL || !APP_ID || !API_KEY) {
    throw new Error("Missing required environment variables: APP_URL, APP_ID, API_KEY");
  }
  const search = 'search';
  const endpoint = 'jobs';
  const country = 'gb';
  const pageNumber = 1;

  // https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=e83403f7&app_key=52f4d84b34cfcf4d1317406249b1d47d
  const url = `${APP_URL}${endpoint}/${country}/${search}/${pageNumber}?app_id=${APP_ID}&app_key=${API_KEY}`;
  

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();

    return data.results.map(normalizeJob);

  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}