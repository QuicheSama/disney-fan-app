<div>
    <slot name="addon"></slot>
	<slot></slot>
</div>

<style>
	div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		position: sticky;
		bottom: 0;
		width: 100%;
		background-color: white;
	}
</style>
