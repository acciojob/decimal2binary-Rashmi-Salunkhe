 function decimalToBinary(num) {
            if (num === 0) return '0'; // Handle the special case for 0
            let binary = '';
            while (num > 0) {
                binary = (num % 2) + binary; // Append the remainder (0 or 1) to the binary string
                num = Math.floor(num / 2); // Update the number by dividing it by 2
            }
            return binary;
        }

        function convertToBinary() {
            const decimalInput = document.getElementById("decimalInput").value;
            const binaryOutput = decimalToBinary(parseInt(decimalInput, 10));
            document.getElementById("binaryOutput").innerText = binaryOutput;
        }

        window.decimalToBinary = decimalToBinary;