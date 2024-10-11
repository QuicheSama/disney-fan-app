<script lang="ts">
    export let name: string;
    export let imageUrl: string;
    export let characterId: number;
    export let films: string[]
</script>

<div class="card">
    <div>
        <img src={imageUrl} alt={name}/>
    </div>
    <div class="details">
        <h2>{name}</h2>
        <div class="film-details">
            <h3>Featured Films</h3>
            <span class='ellipsis'>{films.join(', ')}</span>    
        </div>
        <a href={`/character/${characterId}`}>View Profile</a>
    </div>
</div>

<!-- TODO: eww, use tailwind next time -->
<style>
h2, h3 {
    padding: 0;
    margin: 0;
}

.card {
    display: flex;
    flex-direction: column;
    width: 15.5rem;
    height: 26rem;
}

img {
    width: 15.5rem;
    height: 15.5rem;
}

.details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 15px;
}

.film-details {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ellipsis {
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    /* Fallback for non-webKit browsers */
    line-clamp: 2;
    max-height: calc(1rem * 2);
    line-height: 1rem;
}
</style>