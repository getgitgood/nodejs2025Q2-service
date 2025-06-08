import { Module, forwardRef } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { FavoritesModule } from 'src/favorites/favorites.module';
import { ArtistModule } from 'src/artist/artist.module';
import { AlbumModule } from 'src/album/album.module';

@Module({
  imports: [
    forwardRef(() => FavoritesModule),
    forwardRef(() => ArtistModule),
    forwardRef(() => AlbumModule),
  ],
  controllers: [TrackController],
  providers: [TrackService],
  exports: [TrackService],
})
export class TrackModule {}
