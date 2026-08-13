import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  skillCategories = [
    {
      category: 'Programming languages',
      skills: ['JavaScript', 'Python', 'R', 'SQL']
    },
    {
      category: 'Backend',
      skills: ['REST APIs']
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'NextJs', 'React']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'CI/CD', 'Docker', 'GitHub Actions']
    },
    {
      category: 'Database',
      skills: ['PostgresSQL']
    }
  ];
}
