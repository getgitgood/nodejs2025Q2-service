interface Track {
  id: string;
  name: string;
  albumId: string | null;
  artistId: string | null;
  duration: number;
}

type TCreateTrackDto = Omit<Track, 'id'>;
type TUpdateTrackDto = TCreateTrackDto;
