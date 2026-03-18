class Animal:
    def __init__(self, name : str , age :int , color:str):
        self.name = name
        self.age = age
        self.color = color
    def speak(self)->str:
        return f"{self.name}makes a generic animal sound."
    def describe(self)->str:
        return f"I am {self.name}, a {self.color} animal, {self.age} years old."
    def __str__(self)-> str:
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"

class Dog(Animal):
     def __init__(self, name : str , age :int , color:str, breed: str):
         super().__init__(name,age,color)
         self.breed = breed
     def speak(self)->str:
         return f"{self.name} says : WOOF"
     def fetch(self,item:str)->str:
        return f"{self.name} fetches the {item} and brings it back!"
     def __str__(self)-> str:
             return f"Dog (name={self.name}, age={self.age}, color={self.color}) ,breed={self.breed}"
class Cat(Animal):
     def __init__(self, name : str , age :int , color:str, indoor: bool):
         super().__init__(name,age,color)
         self.indoor = indoor
     def speak(self)->str:
         return f"{self.name} says : MEOW"
     def purr(self) -> str:

            return f"{self.name} is purring contentedly... purrr "
     def __str__(self)-> str:
           return f"Cat(name={self.name}, age={self.age}, color={self.color}, indoor={self.indoor})"

class Parrot(Animal):

    def __init__(self, name: str, age: int, color: str, can_talk: bool):
        super().__init__(name, age, color)
        self.can_talk = can_talk

    def speak(self) -> str:
        if self.can_talk:
            return f"{self.name} says: Polly wants a cracker! "
        return f"{self.name} says: HELLO"

    def mimic(self, phrase: str) -> str:
        if self.can_talk:
            return f"{self.name} mimics: '{phrase}'"
        return f"{self.name} cannot talk, but squawks loudly!"

    def __str__(self) -> str:
        talker = "talking" if self.can_talk else "non-talking"
        return (
            f"Parrot(name={self.name}, age={self.age}, "
            f"color={self.color}, type={talker})"
        )

