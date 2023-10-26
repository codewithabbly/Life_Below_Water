<template>
<v-app>
    <!-- code for news content -->
    <v-content>
        <v-container>
            <div class="latest-news-page mt-5 ms-5 pt-5">
                <h1>Latest News</h1>
                <p>Welcome to the latest news page. Here, you can find the most recent updates and articles.</p>
            </div>
        </v-container>
        <v-container fluid>
            <v-layout row wrap align-center>
            <v-flex xs8  offset-md2>
                <div v-for="article in articles" :key="article.title">
                <v-card class="my-3" hover data-aos="zoom-in" data-aos-easing="ease">
                    <v-img
                    height="350px"
                    v-bind:src="article.urlToImage"
                    ></v-img>
                    <v-container fill-height fluid>
                        <v-layout>
                        <v-flex xs12 align-end d-flex>
                            <span class="headline">{{ article.title }}</span>
                        </v-flex>
                        </v-layout>
                    </v-container>
                    <v-card-text>
                    {{ article.description }}
                    </v-card-text>
                    <v-card-actions>

            
                    <v-chip small color="secondary" class="white--text">
                    {{article.source.name}}
                    </v-chip>

                    <v-spacer></v-spacer>

                    <v-btn icon class="red--text">
                    <v-icon small>fa-reddit</v-icon>
                    </v-btn>
                    <v-btn icon class="light-blue--text">
                    <v-icon small>fa-twitter</v-icon>
                    </v-btn>
                    <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-facebook</v-icon>
                    </v-btn>

                    <v-btn icon class="red--text">
                    <v-icon small>fa-google-plus</v-icon>
                    </v-btn>

                    <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-linkedin</v-icon>
                    </v-btn>
                    
                    
                    <v-spacer></v-spacer>

                    <v-btn small replace color="info" v-bind:href="article.url" target="_blank" >Read More</v-btn>
                </v-card-actions>
                </v-card>
                </div>
            </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <br>
            <br>
            <br>
            <div class="app">
                <h1>Explore Statistics</h1>

                <div class="statsHeader bg-light">
                    <h4 class="my-3"><span class="badge" style="color: #023047; background-color: #F7C59F">SDG 14.1</span> By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution</h4>

                    <svg ref="chart1" class="charts"></svg>

                </div>

                <div class="statsHeader bg-light">
                    <h4 class="my-3"><span class="badge" style="color: #023047; background-color: #F7C59F">SDG 14.5</span> By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information</h4>

                    <svg ref="chart2" class="charts"></svg>
                </div>
                
            </div>
        </v-container>
    </v-content>  
</v-app>

</template>
  
<script>

import axios from 'axios'; //importing the axios a HTTP library to connects the app with the API
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery.min.js'
import * as d3 from 'd3';

export default {
    name: 'LatestNewsPage',

    data() {
        return {
        
        api_key:'131bc06ba3ec4c71b80d985828b87d0b',
        articles: [],
        errors: [] ,
        dataset:[{name: "South Korea", value: 5},
                    {name: "Singapore", value: 1},
                    {name: "Japan", value: 15}, 
                    {name: "China", value: 10}]  // need to replace this data used
        }
    },

    mounted() {
            document.title = "Latest news";
            this.createChart();
    },


    created () {
        console.log("Test works")

        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key)
        .then(response => {
            this.articles = response.data.articles
            console.log('data:')
            console.log(response.data.articles)
        })
        .catch(e => {
            this.errors.push(e)
        })
    
    },


  methods: {
     
      setResource(source){

        axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
        .then(response => {
          //this.articles = response.data.articles
          this.articles = response.data.articles
          console.log('Source Articles:')
          console.log(response.data.articles) // This will give you access to the full object
        })
        .catch(e => {
          this.errors.push(e)
        })

      },

      createChart() {
            const margin = { top: 10, right: 30, bottom: 30, left: 60 };
            const width = 460 - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            const svg = d3.select(this.$refs.chart1)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);

            const xScale = d3.scaleBand()
                .domain(this.dataset.map(d => d.name))
                .range([margin.left, width + margin.left])
                .padding(0.1);

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(this.dataset, d => d.value)])
                .range([height, 0]);

            const g = svg.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);
            //     .call()

            g.selectAll('rect')
                .data(this.dataset)
                .enter()
                .append('rect')
                .attr('x', d => xScale(d.name))
                .attr('y', d => yScale(d.value))
                .attr('width', xScale.bandwidth())
                .attr('height', d => height - yScale(d.value))
                .attr('fill', "#5085A5");

            // Add x-axis
            g.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(xScale));

            // Add y-axis
            g.append('g')
                .call(d3.axisLeft(yScale));

            // second chart
            const svg2 = d3.select(this.$refs.chart2)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

            const g2 = svg2.append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);
            //     .call()

            g2.selectAll('rect')
                .data(this.dataset)
                .enter()
                .append('rect')
                .attr('x', d => xScale(d.name))
                .attr('y', d => yScale(d.value))
                .attr('width', xScale.bandwidth())
                .attr('height', d => height - yScale(d.value))
                .attr('fill', "#5085A5");

            // Add x-axis
            g2.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(xScale));

            // Add y-axis
            g2.append('g')
                .call(d3.axisLeft(yScale));
        }


   }

  }
</script>

<style>

.app {
    background-color: #8FC1E3;
    padding-left: 20px;
    padding-right: 20px;
    color: #023047;
}

.charts {
    display: block; 
    margin: 0 auto;
}

.statsHeader {
    margin: 20px;
    padding: 10px;
    border-radius: 25px;
}

</style>

