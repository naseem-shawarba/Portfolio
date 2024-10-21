<template>
	<section id="about-me">
		<SectionTitle title="🧑‍💻 About Me" />
		<v-container>
			<v-row align="center" justify="center" no-gutters>
				<v-col xs="12" md="12" lg="6" xl="6" xxl="65">
					<v-card :elevation="0">
						<v-card-title class="font-weight-bold text-h3 text-wrap">{{title}}</v-card-title>
						<v-card-text class="text-subtitle-1" v-for="(paragraph, index) in paragraphs" :key="index">{{paragraph}}</v-card-text>
						<v-card-actions>
							<v-btn
								variant="outlined"
								:rounded="0"
								color="blue-darken-4"
								height="40"
								width="130"
								class="ml-2"
								:to="{ path: '/', hash: '#contact' }"
							>
								Contact Me
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
				<v-col xs="12" md="12" lg="6" xl="6" xxl="6">
					<v-card class="ml-4" :elevation="0">
						<v-img src="~/assets/coderFlipped.png" eager/>
					</v-card>
				</v-col>
			</v-row>
			<v-row no-gutters>
				<v-card :elevation="0" class="w-100">
					<v-card-title class="font-weight-bold text-h3">Skills</v-card-title>
					<v-card class="mb-3 ml-4" color="grey-lighten-3" :elevation="0" v-for="category in Object.keys(skills)">
						<v-card-title class="font-weight-bold text-h5">{{category}}</v-card-title>
						<div class="d-flex flex-wrap ml-4 mb-3">
							<div v-for="skill in skills[category]" :key="skill.name" class="ma-1 skill-image" :class="{ highlight: skill.isHighlighted }" >
								<img   :src="skill.link" :alt="skill.name" class="rounded-lg"/>
							</div>
						</div>
					</v-card>
				</v-card>

			</v-row>
			
		</v-container>
		

</section>
</template>

<script>
import skills from '~/data/skills.js';
export default {
  data() {
    return {
      paragraphs: [
        "I’m Naseem Shawarba,  a full-stack web developer based in Berlin with 2+ years of professional experience creating applications that live on the internet. I hold a degree in computer science from Technische Universität Berlin and have a passion for building digital products that make everyday life easier.",
        // "In my free time, I enjoy working on side projects and diving into new technologies to continuously expand my skillset. I thrive on tackling challenges and love being part of creative teams where I can collaborate and grow.",
        "I’m currently looking for opportunities to join a team of like-minded and creative professionals."
      ],
      title: "Behind the Code",
	  skills:skills
    };
  },
};
</script>

<style scoped>
.skill-image {
    position: relative; /* Required for absolute positioning of the ::after element */
    display: inline-block; /* Ensures it stays inline */
}

.skill-image.highlight::after {
    content: ""; /* Required for the pseudo-element to appear */
    position: absolute; /* Positioning relative to the .highlight element */
    right: 0;
	width: 20px;
	aspect-ratio: 1;
  	background: rgba(248, 202, 0, 0.9);
  	clip-path: polygon(50% 0,
		calc(50%*(1 + sin(.4turn))) calc(50%*(1 - cos(.4turn))),
		calc(50%*(1 - sin(.2turn))) calc(50%*(1 - cos(.2turn))),
		calc(50%*(1 + sin(.2turn))) calc(50%*(1 - cos(.2turn))),
		calc(50%*(1 - sin(.4turn))) calc(50%*(1 - cos(.4turn))) 
	);
	transform: translate(45%, -45%);
	z-index: 99;
}
</style>