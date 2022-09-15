<template>
<div class="results">
  <h1>Exam result</h1>
  <div v-if="score || maxScore">
    <p>You'r score is</p>
    <p class="score">{{score}} of {{maxScore}}</p>
    <p class="passed">{{score >= positiveScore?'PASSED':'NOT PASSED'}}</p>
  </div>
  <p v-else>You haven't done this exam yet.</p>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'CardComponent',
  created() {
    this.loadResults();
  },
  data() {
    return {
      score: 0,
      maxScore: 0,
      positiveScore: 0
    }
  },
  methods: {
    async loadResults() {
      if (!this.$cookies.get('userInfo')) return;
      const results = await axios.get(`http://${window.location.hostname}:5000/result/${this.$cookies.get('userInfo')._id}`);
      if (!results.data) return;
      this.score = results.data.score
      this.maxScore = results.data.max_score
      this.positiveScore = results.data.positive_score
      console.log(this.positiveScore)
    }
  }
}
</script>

<style scoped>
.results {
  padding: 1em;
}

h1 {
  color: #1776D2;
  font-size: 1.2em;
}

.results p {
  color: #555;
  font-size: .9em;
  margin-top: .5em;
}

.results .score {
  color: #000;
  font-size: 1.5em;
}
</style>
