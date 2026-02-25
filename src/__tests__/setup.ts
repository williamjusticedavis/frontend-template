import '@testing-library/jest-dom'
import { afterEach } from 'bun:test'
import { cleanup } from '@testing-library/react'

// Automatically clean up the DOM after each test
afterEach(() => {
  cleanup()
})
