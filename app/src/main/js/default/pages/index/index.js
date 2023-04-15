export default {
    data: {
        songName: '',
        artist: '',
        duration: 0,
        currentSecond: 0,
        progressNumber: 0,
        playDisplay: 'flex',
        pauseDisplay: 'none',
        favoriteOutlineDisplay: 'flex',
        favoriteDisplay: 'none',
        currentSong: 0,
        songs: [
            {
                songName: 'Wait no more',
                artist: 'Lilt',
                duration: 125
            },
            {
                songName: 'My own thing',
                artist: 'Red Red Lips',
                duration: 254
            },
            {
                songName: 'Release radar',
                artist: 'Discover Weekly',
                duration: 325
            }
        ],
        playInterval: null
    },
    onShow() {
        this.updateSong();
    },
    prev: function(){
        --this.currentSong;
        if(this.currentSong < 0) this.currentSong = this.songs.length - 1;
        this.updateSong();
    },
    play: function(){
        var that = this;
        this.playDisplay = 'none';
        this.pauseDisplay = 'flex';
        this.playInterval = setInterval(function(){
            that.currentSecond += 1;
            that.updateProgress();
        }, 1000);
    },
    pause: function(){
        this.playDisplay = 'flex';
        this.pauseDisplay = 'none';
        clearInterval(this.playInterval);
    },
    next: function(){
        ++this.currentSong;
        if(this.currentSong > this.songs.length - 1) this.currentSong = 0;
        this.updateSong();
    },
    setFavorite: function(){
        this.favoriteOutlineDisplay = 'none';
        this.favoriteDisplay = 'flex';
    },
    unsetFavorite: function(){
        this.favoriteOutlineDisplay = 'flex';
        this.favoriteDisplay = 'none';
    },
    updateSong: function(){
        this.songName = this.songs[this.currentSong].songName;
        this.artist = this.songs[this.currentSong].artist;
        this.duration = this.songs[this.currentSong].duration;
        this.currentSecond = 0;
        this.updateProgress();
    },
    updateProgress: function(){
        this.progressNumber = this.currentSecond / this.duration * 100;
    }
}
