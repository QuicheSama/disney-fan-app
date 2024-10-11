<header>
	<span>
		<slot name="logo"><div>logo</div></slot>
	</span>
	<span class="header-content">
		<slot><div>...whatever you want</div></slot>
	</span>
	<span>
		<slot name="profile">profile</slot>
	</span>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		width: 100%;
		height: 3rem;
		display: flex;
		flex-direction: row;
		align-items: center;
        justify-content: space-between;
        background-color: white;
	}

	.header-content {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
		flex-grow: 1;
	}
</style>
