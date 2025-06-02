interface Artist {
  id: string;
  name: string;
  grammy: boolean;
}

type TCreateArtistDto = Omit<Artist, 'id'>;
type TUpdateArtistDto = TCreateArtistDto;
