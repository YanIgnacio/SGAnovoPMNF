# Generated by Django 4.1.4 on 2023-04-10 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('atendimento', '0013_remove_atendimento_data_fim_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='atendimento',
            name='data_fim',
            field=models.DateTimeField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='atendimento',
            name='data_inicio',
            field=models.DateTimeField(default=None, null=True),
        ),
    ]
