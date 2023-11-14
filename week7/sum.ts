function calculate(first: number, second: number, ops: "add"|"sub" ): number {
    switch (ops) {
      case "add":
        return (first + second)
      default:
        return 0
    }
  }
  
  var result: number = calculate(2, 3, "add")
  
  console.log(result)