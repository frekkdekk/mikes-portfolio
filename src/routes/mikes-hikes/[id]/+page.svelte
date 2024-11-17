<script>
    export let data
    console.log(data.hike.images)

    const { images } = data.hike
</script>

<p class="h1 text-center">Pictures</p>
<br />
<div class="container text-center mt-5">
    <center>
        <div id="picture-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {#if images}
                    {#each images as { image_path, caption }, index}
                        <div class="carousel-item {index === 0 ? 'active' : ''}">
                            <img src="{image_path}" class="d-block w-100 img-fluid rounded" alt="{caption}">
                        </div>
                    {/each}
                    <a class="carousel-control-prev" href="#picture-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="false">
                            <i class="bi bi-arrow-left-circle-fill"></i>
                        </span>
                        <span class="sr-only">Previous</span>
                    </a>

                    <a class="carousel-control-next" href="#picture-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="false">
                            <i class="bi bi-arrow-right-circle-fill"></i>
                        </span>
                        <span class="sr-only">Next</span>
                    </a>
                {/if}
            </div>
        </div>
        {#if images}
            <a class="btn btn-secondary mt-3" href="/mikes-hikes">Back To Hikes</a>
        {/if}
    </center>
</div>


<style>
    .carousel-item img {
        max-height: 600px;
        max-width: 850px;
        object-fit: cover;
        border: 1px solid black;
    }

    .carousel-item {
        position: relative;
    }
</style>
  