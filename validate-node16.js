
/**
 * Node.js 16 Compatibility Validation Script
 * This script checks if the current dependencies are compatible with Node.js 16
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Node.js 16 Compatibility Validation');
console.log('=====================================\n');

// Check Node version
const nodeVersion = process.version;
console.log(`Current Node.js version: ${nodeVersion}`);

const isNode16 = nodeVersion.startsWith('v16.');
if (isNode16) {
    console.log('✅ Running on Node.js 16 - perfect!\n');
} else {
    console.log(`⚠️  Running on ${nodeVersion} - testing compatibility assumptions\n`);
}

// Read package.json
const packageJsonPath = path.join(__dirname, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ package.json not found');
    process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Check engines field
console.log('📋 Engine Requirements:');
if (packageJson.engines) {
    console.log(`   Node: ${packageJson.engines.node || 'Not specified'}`);
    console.log(`   NPM: ${packageJson.engines.npm || 'Not specified'}`);
    console.log(`   Yarn: ${packageJson.engines.yarn || 'Not specified'}`);
} else {
    console.log('   ⚠️  No engines field specified in package.json');
}
console.log('');

// Check potentially problematic dependencies
console.log('🔍 Checking Node 16 Compatibility:');
console.log('==================================');

const problematicDeps = {
    'next': {
        current: packageJson.dependencies?.next || packageJson.devDependencies?.next,
        node16Compatible: '13.5.6',
        issue: 'Next.js 14.x requires Node.js 18+'
    },
    'eslint': {
        current: packageJson.devDependencies?.eslint,
        node16Compatible: '8.57.0',
        issue: 'ESLint 9.x requires Node.js 18+'
    },
    '@typescript-eslint/eslint-plugin': {
        current: packageJson.devDependencies?.['@typescript-eslint/eslint-plugin'],
        node16Compatible: '6.21.0',
        issue: 'TypeScript ESLint 7.x requires Node.js 18+'
    },
    '@typescript-eslint/parser': {
        current: packageJson.devDependencies?.['@typescript-eslint/parser'],
        node16Compatible: '6.21.0',
        issue: 'TypeScript ESLint 7.x requires Node.js 18+'
    },
    '@types/node': {
        current: packageJson.devDependencies?.['@types/node'],
        node16Compatible: '16.18.68',
        issue: 'Should match Node.js version'
    }
};

let compatibilityIssues = 0;

Object.entries(problematicDeps).forEach(([dep, info]) => {
    if (info.current) {
        const needsUpdate = !isVersionCompatible(info.current, info.node16Compatible);
        const status = needsUpdate ? '❌' : '✅';
        console.log(`${status} ${dep}: ${info.current} ${needsUpdate ? `(recommend: ${info.node16Compatible})` : '(compatible)'}`);
        if (needsUpdate) {
            console.log(`   ${info.issue}`);
            compatibilityIssues++;
        }
    }
});

console.log('');

// Check package.json example
const examplePath = path.join(__dirname, 'package-node16.json.example');
if (fs.existsSync(examplePath)) {
    console.log('✅ Node 16 compatible package.json example found');
} else {
    console.log('❌ Node 16 compatible package.json example not found');
}

// Summary
console.log('\n📊 Compatibility Summary:');
console.log('========================');
if (compatibilityIssues === 0) {
    console.log('✅ All dependencies appear Node 16 compatible!');
} else {
    console.log(`❌ Found ${compatibilityIssues} potential compatibility issues`);
    console.log('📖 See NODE16_COMPATIBILITY.md for detailed migration guide');
}

// GitHub Actions check
const workflowPath = path.join(__dirname, '.github', 'workflows', 'deploy.yml');
if (fs.existsSync(workflowPath)) {
    const workflow = fs.readFileSync(workflowPath, 'utf8');
    if (workflow.includes("node-version: '16'")) {
        console.log('✅ GitHub Actions configured for Node 16');
    } else {
        console.log('❌ GitHub Actions not configured for Node 16');
    }
} else {
    console.log('⚠️  GitHub Actions workflow not found');
}

console.log('\n🎯 Recommended Actions:');
console.log('======================');
if (compatibilityIssues > 0) {
    console.log('1. 📦 Update package.json with Node 16 compatible versions');
    console.log('2. 🧪 Test build with Node 16');
    console.log('3. 🚀 Deploy with confidence');
} else {
    console.log('1. 🧪 Test with Node 16 to confirm compatibility');
    console.log('2. 🚀 Deploy with confidence');
}

/**
 * Simple version compatibility check
 * This is a basic implementation - in practice, you'd want more sophisticated semver checking
 */
function isVersionCompatible(current, recommended) {
    // Extract major version numbers for basic comparison
    const currentMajor = parseInt(current.split('.')[0].replace(/\D/g, ''));
    const recommendedMajor = parseInt(recommended.split('.')[0].replace(/\D/g, ''));
    
    // For major version differences, assume incompatible
    return currentMajor <= recommendedMajor;
}
