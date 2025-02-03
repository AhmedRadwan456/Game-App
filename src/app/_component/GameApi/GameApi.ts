interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  game_url: string;
  name: string;
}

export default async function getData(name: string): Promise<Game[]> {
  const headers = {
    "x-rapidapi-key": "969e1b7393msh3638890db05acaep17ac07jsn9a9a007ea4bf",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  };

  const response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${name}`,
    {
      method: "GET",
      headers: { ...headers },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data: Game[] = await response.json();
  return data.slice(0, 30);
}
