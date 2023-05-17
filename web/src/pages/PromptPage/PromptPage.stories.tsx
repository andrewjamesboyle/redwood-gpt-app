import type { ComponentMeta } from '@storybook/react'

import PromptPage from './PromptPage'

export const generated = () => {
  return <PromptPage />
}

export default {
  title: 'Pages/PromptPage',
  component: PromptPage,
} as ComponentMeta<typeof PromptPage>
