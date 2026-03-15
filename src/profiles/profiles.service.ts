import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: '001',
      name: 'Shweta Soni',
      description: `Looking for someone to merge with my heart. I'm a full-stack romantic who refactors 
            my feelings until they pass all tests. Bonus points if you can debug my issues while we 
            pair program over coffee. Let's commit to something beautiful together`,
    },
    {
      id: randomUUID(),
      name: 'Prateek Kumar',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the 
      terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel
      panic every now and then`,
    },
    {
      id: randomUUID(),
      name: 'Utkarsh Gangwar',
      description: `You think you know VIM? Try Neovim. I'll make your model dreams come true. Want
      to escape the matrix and explore the perfect keyboard shortcut for love?`,
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((item) => item.id === id);
  }

  create(data: CreateProfileDto) {
    const newData = {
      id: randomUUID(),
      ...data,
    };

    this.profiles.push(newData);
    return newData;
  }

  update(id: string, data: CreateProfileDto) {
    const foundIndex = this.profiles.findIndex((profile) => profile.id === id);
    if (foundIndex > -1) {
      data.name && (this.profiles[foundIndex]['name'] = data?.name);
      data.description &&
        (this.profiles[foundIndex]['description'] = data.description);
      return this.profiles[foundIndex];
    } else {
      return {};
    }
  }

  remove(id: string) {
    // return this.profiles.filter((profile) => profile.id === id);
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (matchingProfileIndex > -1) {
      this.profiles.splice(matchingProfileIndex, 1);
    }
  }
}
