class Student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }

    getDetails() {
        return `
            <div class="student">
                <h2>name :${this.name}</h2>
                <p>Roll Number: ${this.roll}</p>
            </div>
        `;
    }
}

const student1 = new Student('KRITHICK', 101);

const appContainer = document.getElementById('app');

appContainer.innerHTML = student1.getDetails();
