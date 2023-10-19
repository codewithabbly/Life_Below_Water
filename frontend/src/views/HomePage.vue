<template>
      <div class="background-image">
            <h1 class="title">What can one person do to make a<br> difference to the world's oceans?</h1>

            <div class="scrollable-content">
                  <div v-for="item in items" :key="item.id">{{ item.text }}

                        <!-- <div class="card mb-3" style="max-width: 540px;">
                              <div class="row g-0">
                                <div class="col-md-4">
                                  <img src="..." class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                  </div>
                                </div>
                              </div>
                            </div> -->


                  </div>


            </div>
            
      </div>    

      
</template>

<script>
      import 'bootstrap/dist/css/bootstrap.css'
      import 'bootstrap/dist/js/bootstrap'
      import 'jquery/dist/jquery.min.js'

      export default {
            name: 'homePage',
            mounted() {
                  document.title = "Life Below Water";
            },

            // created() {
                  
            // }

            // data() {
            //       return {
            //             items: [
            //             { id: 1, text: 'Our Mission' },
            //             { id: 2, text: 'There are many research about water pollution and its effects. However, access to these information takes time and the data lacks proper consolidation. Hence, people only have a vague idea of the water pollution problem. As a result, they fail to see the extent of environmental challenges it poses and the how we need to take action urgently. People also do not fully understand how they can contribute to the water conservation efforts.Life Below Water seeks to provide a platform where we can bring insights into latest news about the recent events, allow seamless sharing of information between people, and hopefully, increase one’s social awareness to the sustainable use and management of our water bodies.' },
            //             { id: 3, text: 'Item 3' },
            //             // Add more items as needed
            //             ]
            //       };
            // }
      }
</script>

<style scoped>
.background-image {
      background-image: url('../assets/ocean.jpg'); 
      background-position: center;
      background-size: cover;
      background-position: center;
      background-attachment: fixed; /* Optional, to make the background fixed */
      background-repeat: no-repeat; /* Prevent the image from repeating */
      height: 100vh;
      margin: 0;
      padding: 0;
      }

.title {
      color: #023047;
      text-align: center;
      font-size: 64px;
      line-height: 1em;
      font-family:'Times New Roman', Times, serif;
      font-weight: 100;
      padding-top: 290px;
}
</style>
