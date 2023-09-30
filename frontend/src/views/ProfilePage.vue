<template>
      <div>
            <h1>Profile</h1>
            <div v-if="isLoggedIn">
                  <!-- user profile content goes here -->
                  <UserProfile :user="user" />
                  <button @click="editProfile">Edit Profile</button>
                  <button @click="logout">Logout</button>
            </div>

            <div v-else>
                  <p>Please log in to view your profile.</p>
                  <router-link to="{ name: 'login' }">
                        <button>Login</button>
                  </router-link>
            </div>
      </div>
</template>

<script>
      import UserProfile from '@/components/UserProfile.vue'

      export default {
            name: 'ProfilePage',
            components: {
                  UserProfile
            },
            data() {
                  return {
                        isLoggedIn: false,
                        user: null
                  }
            },
            methods: {
                  editProfile() {
                        // navigate to the edit profile page
                        this.$router.push({ name: 'editprofile' })
                  },
                  logout() {
                        // clear the user session and navigate to the home page
                        sessionStorage.clear()
                        this.$router.push({ name: 'homepage' })
                  }
            },
            mounted() {
                  // check if the user is logged in
                  const user = JSON.parse(sessionStorage.getItem('user'))
                  if (user) {
                        this.isLoggedIn = true
                        this.user = user
                  }
            }
      }
</script>