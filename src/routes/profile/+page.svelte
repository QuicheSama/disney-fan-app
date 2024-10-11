<div class="container">
    <div class="flex-row">
        <label>
            First Name<span>*</span>
            <input type="text" placeholder="First Name" required/>
        </label>
        <label>
            Last Name<span>*</span>
            <input type="text" placeholder="Last Name" required/>
        </label>
    </div>
    <label>
        Birth Date<span>*</span>
        <input type="date" placeholder="01/01/1980" required/>
    </label>
</div>

<style>
    input, label {
        display:block;
    }

    span {
        color: red;
    }

    .container {
        background-color: #F1F2F3;
        display: flex;
        flex-direction: column;
        padding: 3rem;
    }

    label {
        padding-bottom: 0.5rem;
        padding-right: 0.5rem;
    }
    .flex-row {
        display: flex;
        flex-direction: row;
    }
    
</style>
