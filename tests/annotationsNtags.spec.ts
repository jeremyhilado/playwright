import { test } from '@playwright/test'

test.skip('test 1', async ({page}) => {

})

test.fixme('test to be fixed', async ({page}) => {

})

test('slow test', async ({page}) => {
    test.slow() //triples timeout
})

//you can also skip conditionally

// Tags
test('test login page @fast', async ({page}) => {
    
})

