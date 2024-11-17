<script>
    export let data
    console.log(data.props)
    const hikes = data.props.hikes
</script>

<p class="h1 text-center">Mike's Hikes</p>

<div class="container mt-5">
    <div class="row">
        <div class="col-md-12 mx-auto">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Name</th>
                        <th scope="col">Trail</th>
                        <th scope="col">Date</th>
                        <th scope="col">Pictures</th>
                    </tr>
                </thead>
                <tbody>
                    {#if hikes}
                        {#each hikes as hike}
                            <tr>
                                <td>{hike.location}</td>
                                <td>{hike.name}</td>
                                <td>{hike.trail}</td>
                                <td>{hike.date}</td>
                                <td><a href="/mikes-hikes/{hike.id}">View</a></td>
                            </tr>
                        {/each}
                    {:else}
                        <tr>
                            <td colspan="5" class="text-center">No hikes available</td>
                        </tr>
                    {/if}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .table {
        min-width: 100%;
    }
</style>