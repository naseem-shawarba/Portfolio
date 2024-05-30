<template>
	    <div style="display: flex; align-items: center;">
        <h2 class="mr-8">{{title}}</h2>
        <div style="flex: 1; border-bottom: 1px solid #000;"></div>
        <!-- <span class="ml-8">lol</span> -->
				<slot class="ml-2"/>
    </div>

</template>

<script>
export default {
	props:{
		title:String
	}

}
</script>

<style>

</style>