export interface Song {
  album_id: string;
  artist_id:string;
  title: string;
  image: string;
  song_id : string;
  top_song_acount: number;
  artist: Artist; // Ajout de la propriété artist
}
export interface Artist {
  artist_id:string
  createdAt :Date
  fullname :string
  label :string
  top_artist_count :number
  user_id :string
  avatar ?:string,
  // Ajoutez d'autres propriétés de l'artiste si nécessaire
}
