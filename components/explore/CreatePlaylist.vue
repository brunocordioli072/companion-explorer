<template>
  <a-modal
    title="The Playlist Maker"
    :visible="modalVisible"
    okText="Create"
    :confirm-loading="creatingPlaylist"
    @ok="createPlaylist"
    @cancel="modalVisible = false"
  >
    <a-input v-model="playlistName" placeholder="Name of your playlist" />
    <p style="text-align: justify">
      This playlist will be added to
      <b>your spotify account</b> with the <b>{{ playlistSize }}</b> top tracks
      of <b>each artist</b> you selected, with
      <b>{{ playlistVisibility }}</b> visibility and with the description
      "<b>{{ playlistDescription }}</b>"
    </p>
    <a @click="advanced = !advanced">See playlist advanced properties</a>
    <a-timeline style="margin-top: 20px" v-if="advanced">
      <CreatePlaylistTimeLineItem
        :property.sync="playlistDescription"
        description="Playlist Description"
        icon="highlight"
      ></CreatePlaylistTimeLineItem>
      <CreatePlaylistTimeLineItem
        :property.sync="playlistVisibility"
        description="Playlist Visibility"
        :radioGroup="['private', 'public']"
        icon="eye"
      ></CreatePlaylistTimeLineItem>
    </a-timeline>
  </a-modal>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      playlistName: '',
      playlistSize: 10,
      playlistDescription: '❤️ Playlist created with PlaylistCompanion ❤️',
      playlistVisibility: 'private',
      advanced: true,
    };
  },
  computed: {
    selectedArtists: {
      get(): any {
        return this.$store.getters['explore/selectedArtists'];
      },
      set(val: any): void {
        this.$store.commit('explore/selectedArtists', val);
      },
    },
    creatingPlaylist: {
      get(): any {
        return this.$store.getters['explore/creatingPlaylist'];
      },
      set(val: any): void {
        this.$store.commit('explore/creatingPlaylist', val);
      },
    },
    modalVisible: {
      get(): any {
        return this.$store.getters['explore/modalVisible'];
      },
      set(val: any): void {
        this.$store.commit('explore/modalVisible', val);
      },
    },
  },
  methods: {
    clearView() {
      this.$store.commit('explore/creatingPlaylist', false);
      this.$store.commit('explore/modalVisible', false);
      this.$store.commit('explore/playlistName', null);
      this.$store.commit('explore/search', []);
      this.$store.commit('explore/artists', []);
      this.$store.commit('explore/searchedArtists', []);
      this.$store.commit('explore/selectedArtists', []);
      this.$store.commit('explore/relatedArtists', []);
    },
    async createPlaylist() {
      this.creatingPlaylist = true;
      try {
        const res = await this.$spotify.api.createPlaylist(this.playlistName, {
          public: this.playlistVisibility === 'public',
          description: this.playlistDescription,
        });
        const playlist = res.body;
        try {
          const tracks = [];
          const artistIds = this.selectedArtists.map((a: any) => a.id);
          for (let index = 0; index < artistIds.length; index++) {
            const artistId = artistIds[index];
            const trackSearch = await this.$spotify.api.getArtistTopTracks(
                artistId,
                'GB',
            );
            tracks.push(...trackSearch.body.tracks);
          }
          const tracksURIs = tracks.map((t) => t.uri);
          await this.$spotify.api.addTracksToPlaylist(playlist.id, tracksURIs);
        } catch (e) {
          this.$notification['info']({
            message: 'Error on saving musics',
            description: `Some error has occured, please try again...`,
          });
        }
        this.$notification['info']({
          message: 'Playlist created!!!',
          description: `Playlist added to your spotify with the name ${this.playlistName}`,
        });
        this.clearView();
      } catch (e) {
        this.$notification['info']({
          message: 'Error on creating playlist',
          description: `Some error has occured, please try again...`,
        });
      }
    },
  },
});
</script>

<style></style>
