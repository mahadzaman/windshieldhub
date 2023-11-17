<template>
  <div class="page-content">
    <!-- {{ $route.params.state }} -->
    <div v-if="$route.params.state == 'alabama'">
      <NuxtLink
        v-for="(city, index) in alabamaCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'connecticut'">
      <NuxtLink
        v-for="(city, index) in connecticutCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'florida'">
      <NuxtLink
        v-for="(city, index) in floridaCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'georgia'">
      <NuxtLink
        v-for="(city, index) in georgiaCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'new-york'">
      <NuxtLink
        v-for="(city, index) in newyorkCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'north-carolina'">
      <NuxtLink
        v-for="(city, index) in northcarolinaCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'southcarolina'">
      <NuxtLink
        v-for="(city, index) in southcarolinaCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'tennessee'">
      <NuxtLink
        v-for="(city, index) in tennesseeCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</NuxtLink
      >
    </div>
    <div v-if="$route.params.state == 'texas'">
      <!-- <a
                :href="'/' + $route.params.state + '/' + cityTrim(city)"
                v-for="(city, index) in texasCities"
                :key="index"
                >{{ index + 1 }}&nbsp;{{ city }}</a
            > -->
      <!-- <router-link
                v-for="(city, index) in texasCities"
                :key="index"
                :to="{ name: 'City', component: City, params: { city: cityTrim(city) } }"
                >&nbsp;{{ index + 1 }}&nbsp;{{ city }}</router-link
            > -->
      <NuxtLink
        v-for="(city, index) in texasCities"
        :key="index"
        :to="$route.path + '/' + cityTrim(city)"
        >&nbsp;{{ index + 1 }}&nbsp;{{ city }}lll</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'State',
  data: () => {
    return {
      alabamaCities: ['Birmingham', 'Montgomery'],
      connecticutCities: ['Fairfield County', 'New Haven County', 'Hartford'],
      floridaCities: [
        'Tampa',
        'Fort Myers',
        'Orlando',
        'Jacksonville',
        'Palm Beach',
        'Broward',
        'Miami',
      ],
      georgiaCities: ['Atlanta', 'Savannah'],
      newyorkCities: [
        'Long Island',
        'Queens',
        'Brooklyn',
        'Bronx',
        'Westchester',
      ],
      northcarolinaCities: ['Charlotte', 'Raleigh'],
      southcarolinaCities: ['Charleston', 'Columbia', 'Greenville'],
      tennesseeCities: ['Dallas', 'San Antonlo', 'Houston'],
      texasCities: ['Dallas', 'San Antonio', 'Austin', 'Houston', 'Fortworth'],
    }
  },
  watch: {
    $route(to, from) {
      // this.show = false;
      alert('s')
    },
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    cityTrim(val) {
      // window.console.log(this.$route.path)
      return val.toLowerCase().replaceAll(' ', '-')
      // return 'city'
    },
  },
}
</script>

<style></style>
