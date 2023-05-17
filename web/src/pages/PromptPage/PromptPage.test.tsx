import { render } from '@redwoodjs/testing/web'

import PromptPage from './PromptPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PromptPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PromptPage />)
    }).not.toThrow()
  })
})
