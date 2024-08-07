import { User } from '@gtper/shared/models/user.model';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UserService } from '@gtper/services/user/user.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'gtper-user',
  templateUrl: 'user.component.html',
  styleUrl: 'user.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit{
  users: User[] = [];
  userServise = inject(UserService);

  ngOnInit(): void{
    this.userServise.getUsers().subscribe((users: User[]) => {
      this.users.push(...users);
    });
  }
}
