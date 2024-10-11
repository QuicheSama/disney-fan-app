<div class="flex-column">
    <div class="flex-row">
        <label>
            First Name
            <input type="text" placeholder="First Name" required/>
        </label>
        <label>
            Last Name
            <input type="text" placeholder="Last Name" required/>
        </label>
    </div>
    <label>
        Birth Date
        <input type="date" placeholder="01/01/1980" required/>
    </label>
</div>

<style>
    input, label {
        display:block;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }
    
</style>
