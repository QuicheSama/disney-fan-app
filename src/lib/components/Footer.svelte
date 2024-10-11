<div>
    <slot name="addon"></slot>
	<slot></slot>
</div>

<style>
	div {
        display: flex;
		position: sticky;
		bottom: 0;

        flex-direction: column;
        justify-content: center;
        align-items: center;
		background-color: white;
	}
</style>
