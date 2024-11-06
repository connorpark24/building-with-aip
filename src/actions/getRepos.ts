// getRepos.js
"use server";

export async function getRepos() {
  try {
    const response = await fetch(
      "https://connorpark.usw-16.palantirfoundry.com/api/v2/ontologies/ontology-b4eb2e83-0b71-47b5-b28a-06cd1dbb81ee/objectSets/loadObjects",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.FOUNDRY_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          objectSet: {
            type: "base",
            objectType: "RepoDescription",
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }

    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return [];
  }
}
