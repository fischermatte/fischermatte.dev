import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [...compat.extends('next/core-web-vitals', 'prettier', 'plugin:jsx-a11y/recommended')]
