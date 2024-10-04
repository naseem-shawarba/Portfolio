<template>
	<section id="about-me">
		<SectionTitle title="🧑‍💻 About Me" />
		<v-container>
			<v-row align="center" justify="center" no-gutters>
				<v-col xs="12" md="12" lg="6" xl="6" xxl="65">
					<v-card :elevation="0">
						<v-card-title class="font-weight-bold text-h3 text-wrap">{{title}}</v-card-title>
						<v-card-text class="text-subtitle-1" v-for="(paragraph, index) in paragraphs" :key="index">{{paragraph}}</v-card-text>
					</v-card>
				</v-col>
				<v-col xs="12" md="12" lg="6" xl="6" xxl="6">
					<v-card class="ml-4" :elevation="0">
						<v-img src="~/assets/coderFlipped.png" />
					</v-card>
				</v-col>
			</v-row>
		</v-container>

</section>
</template>

<script>
export default {
  data() {
    return {
      paragraphs: [
        "I’m Naseem Shawarba,  a full-stack web developer based in Berlin with 2+ years of professional experience creating applications that live on the internet. I hold a degree in computer science from Technische Universität Berlin and have a passion for building digital products that make everyday life easier.",
        "In my free time, I enjoy working on side projects and diving into new technologies to continuously expand my skillset. I thrive on tackling challenges and love being part of creative teams where I can collaborate and grow.",
        "I’m currently looking for opportunities to join a team of like-minded and creative professionals."
      ],
      title: "Behind the Code",
    };
  },
};
</script>