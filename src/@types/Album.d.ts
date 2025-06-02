interface Album {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

type TCreateAlbumDto = Omit<Album, 'id'>;
type TUpdateAlbumDto = TCreateAlbumDto;
