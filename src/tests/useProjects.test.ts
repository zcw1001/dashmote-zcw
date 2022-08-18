import { assert, describe, it } from 'vitest'
import useProjects from '@/use/projects'

describe('filterProjects()', async () => {
  const { projects, matchingProjects, filterProjects } = useProjects()

  it('should restore matchingProjects correctly when query is emoty string', () => {
    filterProjects('A')
    assert.notDeepEqual(matchingProjects, projects)
    filterProjects('')
    assert.deepEqual(matchingProjects, projects)
  })

  it('should filter matchingProjects correctly when query is not emoty string', () => {
    const expected_matchingProjects = [
      {"name": "Project A", "users": 4, "dashboards": 3, category: "D"}
    ]
    filterProjects('A')
    assert.deepEqual(matchingProjects, expected_matchingProjects)
  })
})

describe('deleteProject()', async () => {
  it('should delete the project from both projects and matchingProjects correctly', () => {
    const { projects, matchingProjects, deleteProject } = useProjects()
    const expected_projects = [
      {"name": "Project B", "users": 2, "dashboards": 4, category: "C"},
      {"name": "Project C", "users": 1, "dashboards": 2, category: "F"},
      {"name": "Project D", "users": 3, "dashboards": 2, category: "D"}
    ]

    deleteProject('Project A')
    assert.deepEqual(projects, expected_projects)
    assert.deepEqual(matchingProjects, expected_projects)
  })

  it('should not delete anything from both projects and matchingProjects if there is no match for the given project name', () => {
    const { projects, matchingProjects, deleteProject } = useProjects()
    const expected_projects = [
      {"name": "Project A", "users": 4, "dashboards": 3, category: "D"},
      {"name": "Project B", "users": 2, "dashboards": 4, category: "C"},
      {"name": "Project C", "users": 1, "dashboards": 2, category: "F"},
      {"name": "Project D", "users": 3, "dashboards": 2, category: "D"}
    ]

    deleteProject('www')
    assert.deepEqual(projects, expected_projects)
    assert.deepEqual(matchingProjects, expected_projects)
  })
})

describe('filterProjects() & deleteProject()', async () => {
  it('should delete the project from both projects and matchingProjects correctly after matchingProjects is filtered', () => {
    const { projects, matchingProjects, filterProjects, deleteProject } = useProjects()
    const expected_projects = [
      {"name": "Project B", "users": 2, "dashboards": 4, category: "C"},
      {"name": "Project C", "users": 1, "dashboards": 2, category: "F"},
      {"name": "Project D", "users": 3, "dashboards": 2, category: "D"}
    ]
    filterProjects('A')
    deleteProject('Project A')
    assert.deepEqual(projects, expected_projects)
    assert.deepEqual(matchingProjects, [])
  })
})

export {}