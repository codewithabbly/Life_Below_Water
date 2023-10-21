<template>
    <v-app>
        <v-container>
            <br>
            <br>
            <br>
            <div class="app">
                <h1>Dashboard</h1>
                <h4>Summary of Articles by Country</h4>
                <svg ref="chart"></svg>
            </div>
        </v-container>
    </v-app>

        
    
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap/dist/js/bootstrap'
    import 'jquery/dist/jquery.min.js'
    import * as d3 from 'd3';
    

    export default {
        name: 'LatestNewsPage',
        data () {
            return {
                dataset:[{name: "South Korea", value: 5},
                        {name: "Singapore", value: 1},
                        {name: "Japan", value: 15}, 
                        {name: "China", value: 10}]  // need to replace this data used 
            };
        },
        mounted() {
                document.title = "Latest news";
                this.createChart();
        },
        created() {
                console.log("Test works")
        }, 
        methods: {
            createChart() {
                const margin = { top: 20, right: 30, bottom: 40, left: 40 };
                const width = 600 - margin.left - margin.right;
                const height = 400 - margin.top - margin.bottom;

                const svg = d3.select(this.$refs.chart)
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

                g.selectAll('rect')
                    .data(this.dataset)
                    .enter()
                    .append('rect')
                    .attr('x', d => xScale(d.name))
                    .attr('y', d => yScale(d.value))
                    .attr('width', xScale.bandwidth())
                    .attr('height', d => height - yScale(d.value))
                    .attr('fill', 'steelblue');

                // Add x-axis
                g.append('g')
                    .attr('transform', `translate(0,${height})`)
                    .call(d3.axisBottom(xScale));

                // Add y-axis
                g.append('g')
                    .call(d3.axisLeft(yScale));
            },
        }
    }
</script>

<style>

.app {
    background-color: #8FC1E3;
    padding-left: 20px;
}

h4 {
    text-decoration: underline;
}

</style>
