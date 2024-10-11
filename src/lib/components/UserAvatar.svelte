<script>
	import ProfileIcon from './svg/UserIcon.svelte';
</script>

<div class="circle">
    <div class='icon'>
        <ProfileIcon/>
    </div>
</div>

<style>
	.circle {
		background-color:#054553;
		border-radius: 50%;
        width: 2rem;
        height: 2rem;
	}

	.icon {
		padding-left: 0.3rem;
        padding-top: 0.3rem;
	}
</style>
