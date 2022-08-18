import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', async () => {
  it('should show all the projects', () => {
    expect(HomeView).toBeTruthy()
    const wrapper = mount(HomeView)

    const projects = wrapper.findAll('#project-item')
    expect(projects.length).toBe(4) // check if the number of projects is correct
    const projectNames = ['Project A', 'Project B', 'Project C', 'Project D']
    for (let i = 0; i < projects.length; i++) {
      // check if the names of projects are correct
      expect(projects[i].text()).toContain(projectNames[i])
    }
  })
  
  it('should filter projects correctly', async () => {
    expect(HomeView).toBeTruthy()
    const wrapper = mount(HomeView)

    const searchInput = wrapper.find("#SearchBox input")
    await searchInput.setValue('B') // set text of the search box to "B"

    const projects = wrapper.findAll('#project-item')
    expect(projects.length).toBe(1) // check if the number of projects is correct
    const projectNames = ['Project B']
    for (let i = 0; i < projects.length; i++) {
      // check if the names of projects are correct
      expect(projects[i].text()).toContain(projectNames[i])
    }
  })

  it('should delete projects correctly', async () => {
    expect(HomeView).toBeTruthy()
    const wrapper = mount(HomeView)

    const deleteButton = wrapper.find("#project-item:nth-child(2) #delete") // find the delete button of the second project which is "Project B"
    await deleteButton.trigger('click') // click the delete button to delete "Project B"

    const confirmButton = document.querySelector('.ant-modal .ant-btn-primary') as HTMLElement // find the confirmation button of the project deletion modal
    confirmButton.click() // click the confirmation button
    await nextTick() // wait for dom changes to complete

    const projects = wrapper.findAll('#project-item')
    expect(projects.length).toBe(3) // check if the number of projects is correct
    const projectNames = ['Project A', 'Project C', 'Project D']
    for (let i = 0; i < projects.length; i++) {
      // check if the names of projects are correct
      expect(projects[i].text()).toContain(projectNames[i])
    }
  })
})

export {}