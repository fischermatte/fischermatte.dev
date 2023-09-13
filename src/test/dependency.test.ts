// imports and applies the jest extensions
import 'tsarch/dist/jest'

// imports the files entrypoint
import {filesOfProject} from 'tsarch'

describe('architecture', () => {
  // architecture tests can take a while to finish
  jest.setTimeout(60000)

  // we use async await in combination with jest since this project uses asynchronous calls
  it('should be valid core dependencies', async () => {
    await expect(filesOfProject().inFolder('*/core/*').shouldNot().dependOnFiles().inFolder('*/pages/*')).toPassAsync()
    await expect(
      filesOfProject().inFolder('*/core/*').shouldNot().dependOnFiles().inFolder('*/components/*'),
    ).toPassAsync()
  })

  it('should be cycle free', async () => {
    const rule = filesOfProject().inFolder('src').should().beFreeOfCycles()
    await expect(rule).toPassAsync()
  })
})
