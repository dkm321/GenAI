
<template>
	<v-container>

		<div class="filters">
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field v-model="searchTerm" label="Search" prepend-inner-icon="mdi-magnify" clearable
						variant="underlined"></v-text-field>
				</v-col>
				<v-col cols="12" md="4">
					<v-select v-model="filterType" :items="typeOptions" variant="underlined" label="Filter by Type"
						hint="Select one or more types"></v-select>
				</v-col>
				<v-col cols="12" md="4">
					<v-select v-model="sortOption" variant="underlined" :items="sortOptions" label="Sort by"></v-select>
				</v-col>
			</v-row>
		</div>

		<v-row class="mt-6">
			<v-col v-for="resource in filteredAndSortedResources" :key="resource.id" cols="12" sm="6" md="4">
					<v-card :href="resource.link" target="_blank" class="mx-auto card-item" max-width="400" outlined>
						<v-card-title class="title-background">{{ resource.title }}</v-card-title>
						<v-card-subtitle class="subtitle-padding">{{ resource.source }}</v-card-subtitle>
						<v-card-text>{{ resource.description }}</v-card-text>
						<v-card-actions>
							<v-chip class="white--text"
								:class="{ 'course-chip': resource.type === 'course', 'blog-chip': resource.type === 'blog', 'newsletter-chip': resource.type === 'newsletter' }">{{
									resource.type }}</v-chip>
						</v-card-actions>
					</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

  
<style scoped>
.card-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}

.title-background {
	background-color: #f7f6f6;
	/* light gray */
}

.subtitle-padding {
	padding-top: 10px;
	/* add space on the top of the subtitle */
}

.course-chip {
	background-color: #c4f5f3ee;
}

.blog-chip {
	background-color: rgb(245, 197, 197);
}

.newsletter-chip {
	background-color: rgb(178, 248, 176);
}

.filters {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
}
</style>
  
<script>

export default {
	data() {
		return {
			searchTerm: '',
			filterType: 'All',
			sortOption: '',
			typeOptions: ['All', 'Course', 'Blog', 'Newsletter'],
			sortOptions: ['Title', 'Source', 'Date'],
			resources: [
				{
					id: 1,
					title: "ChatGPT Prompt Engineering",
					source: 'DeepLearning.AI',
					description: 'Learn how to use ChatGPT with better prompt engineering to get the most out of it.',
					link: "https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction",
					type: 'course',
					datetime: '2023-05-08T15:03:00Z'
				},
				{
					id: 2,
					title: "Generative AI Learning Path",
					source: 'Google',
					description: 'This learning path guides you through a curated collection of content on Generative AI products and technologies, from the fundamentals of Large Language Models to how to create and deploy generative AI solutions on Google Cloud.',
					link: "https://www.cloudskillsboost.google/paths/118",
					type: 'course',
					datetime: '2023-05-15T14:03:00Z'
				},
				{
					id: 3,
					title: "The role of an AI Product Manager",
					source: 'Mind the Product',
					description: "Large IT firms aren't the only ones employing artificial intelligence in production and distribution operations. Whether companies take a cautious approach or leap headfirst, AI programs are gaining popularity across many industries, from the automobile to retail, education, and healthcare.",
					link: "https://www.mindtheproduct.com/the-role-of-an-ai-product-manager/",
					type: 'blog',
					datetime: '2023-06-02T07:00:00Z'
				},
				{
					id: 4,
					title: "The Future of AI in Business",
					source: 'Turing.com',
					description: "This article provides a high-level overview of the future of AI in business. It discusses the impact of AI on different industries and the challenges and opportunities that businesses will face in the years to come.",
					link: "https://www.turing.com/blog/coursera-co-founder-andrew-ng-on-why-leaders-should-invest-in-ai/",
					type: 'blog',
					datetime: '2023-05-28-T18:00:00Z'
				},
				{
					id: 5,
					title: "TLDR AI Newsletter",
					source: 'TLDR',
					description: "Free, daily newsletter with the latest in AI 🧠, machine learning 🤖, and data science 📈!",
					link: "https://tldr.tech/ai",
					type: 'newsletter',
					datetime: '2023-06-04T11:00:00Z'
				},
				{
					id: 6,
					title: "AI for Everyone",
					source: 'Coursera',
					description: "“AI for Everyone”, a non-technical course, will help you understand AI technologies and spot opportunities to apply AI to problems in your own organization. You will see examples of what today's AI can - and cannot - do. Finally, you will understand how AI is impacting society and how to navigate through this technological change.",
					link: "https://www.coursera.org/learn/ai-for-everyone?utm_source=deeplearningai&utm_medium=institutions&utm_campaign=WebsiteCoursesAI4ETopButton",
					type: 'course',
					datetime: '2023-06-11T11:00:00Z'
				},
				// Add more resources as needed
			]
		};
	},
	computed: {
		filteredAndSortedResources() {
			let resources = this.resources;

			if (this.filterType !== 'All') {
				resources = resources.filter(resource => resource.type === this.filterType.toLowerCase());
			}

			if (this.sortOption === 'Title') {
				resources.sort((a, b) => a.title.localeCompare(b.title));
			} else if (this.sortOption === 'Source') {
				resources.sort((a, b) => a.source.localeCompare(b.source));
			} else if (this.sortOption === 'Date') {
				resources.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
			}

			if (this.searchTerm) {
				const term = this.searchTerm.toLowerCase();
				resources = resources.filter(resource =>
					resource.title.toLowerCase().includes(term) ||
					resource.source.toLowerCase().includes(term) ||
					resource.description.toLowerCase().includes(term)
				);
			}

			return resources;
		}
	}
};
</script>
  