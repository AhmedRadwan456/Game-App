interface GameDetails {
  id: number;
  thumbnail: string;
  genre: string;
  platform: string;
  title: string;
  description: string;
  status: string;
  freetogame_profile_url: string;
}


 export const getDataDetails = async (id: number): Promise<GameDetails | any> => {
  
  const headers = {
    "x-rapidapi-key": "969e1b7393msh3638890db05acaep17ac07jsn9a9a007ea4bf",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  };

  const response = await fetch(`https://www.freetogame.com/api/game?id=${id}`, {
    method: "GET",
    headers: headers,
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data: GameDetails = await response.json();
  return data;
};

export default GameDetails;
