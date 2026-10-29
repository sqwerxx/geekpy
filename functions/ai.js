export async function onRequest(context) {
  const { request, env } = context;
  
  const res = await fetch('https://api-inference.huggingface.co/models/Qwen/Qwen2.5-7B-Instruct', {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${env.HF_TOKEN}`, 
      'Content-Type': 'application/json' 
    },
    body: request.body
  });
  
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
