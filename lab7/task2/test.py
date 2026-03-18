from task2 import Animal, Dog, Cat, Parrot
def demonstrate()->None:
    dog = Dog(name="Buddy", age=3, color="golden", breed="Labrador")
    cat = Cat(name="Whiskers", age=5, color="orange", indoor=True)
    parrot = Parrot(name="Polly", age=2, color="green", can_talk=True)
    print(dog)
    print(cat)
    print(parrot)
    print(dog.describe())
    print(cat.describe())
    print(parrot.describe())
def dem_an(animals: list)->None:
    for animal in animals:
        print(animal.speak())

def demonstrate_iteration(animals: list) -> None:

    for index, animal in enumerate(animals, start=1):
        print(f"  [{index}] {animal}")
def main() -> None:

    animals = [
        Dog(name="Buddy",   age=3, color="golden",  breed="Labrador"),
        Dog(name="Rex",     age=5, color="black",    breed="German Shepherd"),
        Cat(name="Luna",    age=2, color="white",    indoor=True),
        Cat(name="Shadow",  age=7, color="black",    indoor=False),
        Parrot(name="Polly",  age=2, color="green",  can_talk=True),
        Parrot(name="Squawk", age=4, color="yellow", can_talk=False),
    ]

    demonstrate()
    demonstrate_iteration(animals)
    dem_an(animals)




if __name__ == "__main__":
    main()
