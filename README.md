# Introduction to Solana Development

This repository contains a collection of exercises to help you learn Solana development. Each exercise focuses on different aspects of Solana blockchain development, from basic concepts to more advanced topics.

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- Solana CLI tools
- A code editor (VS Code recommended)

## Project Structure

The project is organized into different exercises, each in its own directory:

- `generate-keypair/` - Learn how to generate and manage Solana keypairs
- `reading-data/` - Practice reading data from the Solana blockchain
- `writing-data/` - Learn how to write data to the Solana blockchain
- `programs/` - Contains Solana program examples
  - `hello-world/` - A basic Solana program example
  - `counter/` - A counter program example
  - `todo/` - A todo list program example

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd intro-to-solana
```

2. Install dependencies:
```bash
npm install
```

3. Configure Solana CLI:
```bash
solana config set --url localhost
```

## Exercise Details

### 1. Generate Keypair
Location: `generate-keypair/`
- Learn how to create and manage Solana keypairs
- Understand public and private key concepts
- Practice keypair generation and storage

### 2. Reading Data
Location: `reading-data/`
- Learn how to connect to Solana network
- Practice reading account data
- Understand different data types and structures

### 3. Writing Data
Location: `writing-data/`
- Learn how to create and modify accounts
- Practice sending transactions
- Understand transaction fees and confirmation

### 4. Solana Programs
Location: `programs/`

#### Hello World Program
Location: `programs/hello-world/`
- Basic program structure
- Program deployment
- Client interaction

#### Counter Program
Location: `programs/counter/`
- State management
- Program instructions
- Account data handling

#### Todo Program
Location: `programs/todo/`
- Complex data structures
- Multiple instructions
- Program testing

## Development Workflow

1. Each exercise directory contains its own `package.json` and dependencies
2. Navigate to the specific exercise directory
3. Install dependencies for that exercise:
```bash
cd <exercise-directory>
npm install
```
4. Follow the exercise-specific instructions in each directory

## Testing

Each program includes tests to verify functionality:
```bash
npm test
```

## Resources

- [Solana Documentation](https://docs.solana.com)
- [Solana Cookbook](https://solanacookbook.com)
- [Solana Program Library](https://spl.solana.com)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 