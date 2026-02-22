export async function callApi(endpoint: string, body: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API Error: ${res.status} - ${text}`);
    }

    return res.json();
  } catch (err: any) {
    console.error("API call failed:", err);
    throw err;
  }
}