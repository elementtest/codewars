//
-- CSS KEYMAP to expand star asterisk
    vim.keymap.set('i', '*<leader>', function()
        -- Insert the characters * { }
        vim.api.nvim_put({ '* { }' }, 'c', true, true)

        -- Move the cursor back inside the braces
        local cursor = vim.api.nvim_win_get_cursor(0)
        vim.api.nvim_win_set_cursor(0, { cursor[1], cursor[2] - 2 })

        -- Simulate pressing the Enter key
        vim.api.nvim_feedkeys(vim.api.nvim_replace_termcodes('<CR>', true, false, true), 'n', true)
    end, { noremap = true, silent = true })
//Find the Difference in Age between Oldest and Youngest Family Members
//return an array with max age, min age and age diff
function differenceInAges(ages){
  let max = ages[0];
  let min = ages[0];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > max) {
      max = ages[i]
    }
    if (ages[i] < min) { 
    min = ages[i]
    }
  }
  //end for loop
  let diff = (max - min);
  let finalArray = [];
  finalArray.push(min, max, diff)
  return finalArray
}
